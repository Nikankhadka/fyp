#!/usr/bin/env node
/**
 * Ensures sharp's prebuilt native binaries are present and co-located in the
 * Next.js standalone server output. With pnpm, `next build`'s @vercel/nft trace
 * copies sharp's JS and the @img/sharp-<platform> .node binding but frequently
 * misses the sibling @img/sharp-libvips-<platform> shared library that the
 * binding dlopens at runtime, causing `ERR_DLOPEN_FAILED` / "Library not loaded:
 * libvips-cpp.*.dylib|so" in production image optimization.
 *
 * This script scans the standalone tree for every @img directory that contains a
 * `sharp-<platform>` binding and makes sure the matching `sharp-libvips-<platform>`
 * package is present as a sibling (copying the real files from the source
 * node_modules, dereferencing pnpm symlinks).
 *
 * Run after `next build`. Safe to run when no standalone output exists.
 */
const fs = require('fs')
const path = require('path')

const repoRoot = path.resolve(__dirname, '..')
const webRoot = path.join(repoRoot, 'apps', 'web')
const standaloneRoot = path.join(webRoot, '.next', 'standalone')

function copyRecursive(src, dest) {
  const stat = fs.lstatSync(src)
  if (stat.isSymbolicLink()) {
    copyRecursive(fs.realpathSync(src), dest)
    return
  }
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true })
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry))
    }
    return
  }
  fs.copyFileSync(src, dest)
}

// Map platform -> real source dir for @img/sharp-libvips-<platform>.
const libvipsByPlatform = new Map()
const srcPnpm = path.join(webRoot, 'node_modules', '.pnpm')
if (fs.existsSync(srcPnpm)) {
  for (const entry of fs.readdirSync(srcPnpm)) {
    const m = entry.match(/^@img\+sharp-libvips-(.+)@\d/)
    if (!m) continue
    const platform = m[1]
    const pkgDir = path.join(
      srcPnpm,
      entry,
      'node_modules',
      '@img',
      `sharp-libvips-${platform}`,
    )
    if (fs.existsSync(pkgDir)) {
      libvipsByPlatform.set(platform, fs.realpathSync(pkgDir))
    }
  }
}

if (libvipsByPlatform.size === 0) {
  console.log('[ensure-sharp-standalone] no sharp-libvips packages found in source; skipping')
  process.exit(0)
}
if (!fs.existsSync(standaloneRoot)) {
  console.log('[ensure-sharp-standalone] no standalone output; skipping')
  process.exit(0)
}

// Walk the standalone .pnpm dir for @img directories that hold a sharp-<platform>
// binding, and ensure the matching sharp-libvips-<platform> sibling exists.
const standalonePnpm = path.join(standaloneRoot, 'node_modules', '.pnpm')
let fixed = 0
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === '@img') {
        ensureLibvips(full)
      } else {
        walk(full)
      }
    }
  }
}

function ensureLibvips(imgDir) {
  for (const platform of libvipsByPlatform.keys()) {
    const bindingDir = path.join(imgDir, `sharp-${platform}`)
    const libvipsDir = path.join(imgDir, `sharp-libvips-${platform}`)
    if (fs.existsSync(bindingDir) && !fs.existsSync(libvipsDir)) {
      copyRecursive(libvipsByPlatform.get(platform), libvipsDir)
      console.log(
        `[ensure-sharp-standalone] added sharp-libvips-${platform} alongside ${path.relative(
          standaloneRoot,
          bindingDir,
        )}`,
      )
      fixed++
    }
  }
}

if (fs.existsSync(standalonePnpm)) {
  walk(standalonePnpm)
}
console.log(
  fixed
    ? `[ensure-sharp-standalone] patched ${fixed} location(s)`
    : `[ensure-sharp-standalone] all locations already complete`,
)
