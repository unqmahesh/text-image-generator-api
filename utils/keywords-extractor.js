const keywordsExtractor = async (prompt, next) => {
    try{
        const words = prompt.split(/\s+/)
        const cleanWords = words.map(word => word.replace(/[,.!@#$%^&*()\s?:;{}|<>"'\\]$/, ""));
        
        const stopWords = [
            "i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours",
            "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself",
            "it", "its", "itself", "they", "them", "theirs", "themselves", "what", "which", "who",
            "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been",
            "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the",
            "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for",
            "with", "about", "against", "between", "into", "through", "during", "before", "after",
            "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under",
            "again", "further", "then", "once", "here", "there", "all", "any", "more", "most", "both",
            "all", "some", "such", "many", "other", "same", "else", "were", "can", "will", "just",
            "make", "like", "get", "go", "look", "see", "come", "into", "out", "must", "over", "under",
            "should", "too", "The", "create"
          ];
          
          const keyWords = cleanWords.filter(word => !stopWords.includes(word))

          return keyWords
    }
    catch(error){
        const err = new Error(error)
        err.name = "keyWords_extraction_failed"
        next(err)
    }
}

export default keywordsExtractor