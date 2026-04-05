#!/bin/sh

set -eu

copy_if_missing() {
  src="$1"
  dest="$2"

  if [ -f "$dest" ]; then
    echo "Keeping existing $dest"
    return
  fi

  cp "$src" "$dest"
  echo "Created $dest from $src"
}

copy_if_missing "infra/docker/env/api.dev.env.example" "infra/docker/env/api.dev.env"
copy_if_missing "infra/docker/env/api.prod.env.example" "infra/docker/env/api.prod.env"
copy_if_missing "infra/docker/env/web.dev.env.example" "infra/docker/env/web.dev.env"
copy_if_missing "infra/docker/env/web.prod.env.example" "infra/docker/env/web.prod.env"
copy_if_missing "infra/docker/env/mongo.dev.env.example" "infra/docker/env/mongo.dev.env"
copy_if_missing "infra/docker/env/mongo.prod.env.example" "infra/docker/env/mongo.prod.env"
