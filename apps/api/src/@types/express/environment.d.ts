
//i think in the new update declare global doesnot work so just use name space and modify the interface
declare namespace NodeJS {
      interface ProcessEnv {
          user:string,
          pass:string,
          mailSecret:string,
          saltRounds:number,
          sessionSecret:string,
          accessToken:string,
          refreshToken:string,
          accessTokenExpire:string,
          refreshTokenExpire:string,
          TRUST_PROXY?:string,
          COOKIE_SECURE?:string,
          COOKIE_SAME_SITE?:string,
          API_BASE_URL?:string,
          WEB_APP_URL?:string,
          PUBLIC_API_BASE_URL?:string,
          PUBLIC_WEB_APP_URL?:string,
          dbPassword:string
          googleClientId:string
          googleClientSecret:string
          facebookClientId:string
          facebookClientSecret:string
      }
 }
  
