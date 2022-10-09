export default function SecurityPro() {
    const s = [
        {
            name:"Content-Type-Option",
            content:"nosniff"
        },
        {
            name:"Content-Security-Policy",
            content:"script-src 'nonce-EDNnf0233nceIOfn39afjuepcxb324ss23239h3sdfa' 'sha256-4piP7FKREnYA+S0CcxJe360Aph9zQN5AWr1xuxjSP+o=' 'self' 'unsafe-inline'; connect-src 'self';base-uri 'self';form-action 'self';object-src 'self';"
        },
        {
            name:"Cache-Control",
            content:"public, s-maxage=10, stale-while-revalidate=59"
        }
        ]
    return s;
}