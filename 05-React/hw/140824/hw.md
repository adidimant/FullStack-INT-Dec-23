1) Create theme experience in our application:
  a) use the ThemeContext we have created in each relevant component that needs to present different html/css according to the theme
  b) top-right icon - sun/moon for changing the theme (using the dispatch function)
  c) the things that should change:
    * different background
    * different font color (regular/white [dark mode])
    * button - light/darker as well
    * inputs
    * instagram logo

2) Create UserContext, with the fields: { isLoggedIn: boolean, email, firstName, lastName, userId, devices: string[] }
