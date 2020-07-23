export default (context) => {
  if (!context.app.context.app.$cookies.get('user-token')) {
    return context.redirect('/login')
  }
}
