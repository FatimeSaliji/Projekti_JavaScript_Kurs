function getQueryStringFromURL(url){
    const url_parts = url.split("?")
    const qa_index = url_parts.length -1
    return url_parts[qa_index]
}