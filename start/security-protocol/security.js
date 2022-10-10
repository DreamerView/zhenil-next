

export default function SecurityPro() {
    const s = [
        {
            name: 'Strict-Transport-Security',
            content: 'max-age=63072000; includeSubDomains; preload'
        },
        {
            name: 'X-DNS-Prefetch-Control',
            content: 'on'
        },
        {
            name:"Content-Type-Option",
            content:"nosniff"
        },
        {
            name:"Content-Security-Policy",
            content:"script-src 'nonce-EDNnf0233nceIOfn39afjuepcxb324ss23239h3sdfa' 'sha256-4piP7FKREnYA+S0CcxJe360Aph9zQN5AWr1xuxjSP+o=' 'self'; connect-src 'self';base-uri 'none';form-action 'self';object-src 'none'; child-src 'none';frame-src 'self';img-src 'self' data:;manifest-src 'self';prefetch-src 'self';worker-src 'self';font-src 'self';"
        },
        {
            name:"Frame-Options",
            content:"SAMEORIGIN"
        },
        {
            name:"Permissions-Policy",
            content:"camera=(), microphone=(), geolocation=()"
        },
        {
            name:"Permissions-Policy-Directive-Support",
            content:["proposed", "standard"]
        },
        {
            name:"Referrer-Policy",
            content:"no-referrer"
        },
        {
            name:"X-XSS-Protection",
            content:"1; mode=block"
        }
        ]
    return s;
}