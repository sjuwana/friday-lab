import { NewsContextProvider } from "./NewsContext"
import News from "./News"
function NewsDisplay(){
    return(
        <NewsContextProvider>
      <News />
    </NewsContextProvider>
    )
}

export default NewsDisplay