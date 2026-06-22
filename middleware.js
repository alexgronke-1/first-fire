export const config = {
  matcher: '/(.*)',
};

export default function middleware(request) {
  const authorization = request.headers.get('authorization');

  if (authorization) {
    const encoded = authorization.replace(/^Basic /, '');
    const [user, pass] = atob(encoded).split(':');
    if (
      user === (process.env.AUTH_USER ?? '') &&
      pass === (process.env.AUTH_PASS ?? '')
    ) {
      return;
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="First Fire"' },
  });
}
