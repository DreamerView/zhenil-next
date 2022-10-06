module.exports = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
    },
    {
        key: 'Server',
        value: 'Nginx' // phony server value
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    },
    {
        key: 'X-Frame-Options',
        value: 'sameorigin'
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
    },
    {
        key: 'Referrer-Policy',
        value: 'same-origin'
    },
    {
        key: 'Permissions-Policy',
        value: 'geolocation=*'
    },
    {
        key: 'X-Permitted-Cross-Domain-Policies',
        value: 'none'
    },
    {
        key: 'Feature-Policy',
        value: "camera 'none'; fullscreen 'self'; microphone 'self'"
    },
    {
        key:"Content-Security-Policy",
        value:"script-src 'self'  'nonce-EDNnf0233nceIOfn39afjuepcxb324ss23239h3sdfa' 'sha256-4piP7FKREnYA+S0CcxJe360Aph9zQN5AWr1xuxjSP+o='; connect-src 'self';base-uri 'self';form-action 'self';object-src 'self';"
    }
];