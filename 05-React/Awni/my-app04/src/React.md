useState => Hook that allows you to have state variables in functional components 
הוק המאפשר לך לקבל משתני מצב ברכיבים פונקציונליים

useEffect => Hook that allows you to perform side effects in functional components
הוק המאפשר לך לבצע אפקטים צדדיים ברכיבים פונקציונליים

useContext => Hook that allows you to use context in functional components
הוק המאפשר לך להשתמש בהקשר ברכיבים פונקציונליים

useReducer => Hook that allows you to use reducers in functional components
הוק המאפשר לך להשתמש בממעטים ברכיבים פונקציונליים

useRef => Hook that allows you to use refs in functional components
הוק המאפשר לך להשתמש ברפרנסים ברכיבים פונקציונליים

useMemo => Hook that allows you to use memoization in functional components
הוק המאפשר לך להשתמש בממוריזציה ברכיבים פונקציונליים

useCallback => Hook that allows you to use callbacks in functional components
הוק המאפשר לך להשתמש בקולבקים ברכיבים פונקציונליים

useImperativeHandle => Hook that allows you to use imperative handle in functional components
הוק המאפשר לך להשתמש בטיפול סופי ברכיבים פונקציונליים

-Render : 
a) when do we re-render a react component:
  1) in any change of a component state - בכל שינוי של מצב רכיב
  2) in any render of the parent component that is using this component - בכל עיבוד של רכיב האב שמשתמש ברכיב זה
  3) in any prop change - בכל שינוי של פרופ
  4) context change (useContext) - בכל שינוי של הקשר
  5) [In development] - <React.StrictMode> wrapper creates more unexpected re-renders (not happening in our actual website in production)



