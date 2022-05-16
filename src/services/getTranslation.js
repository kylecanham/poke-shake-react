const baseUrl = 'https://api.funtranslations.com/translate/shakespeare.json?text='
const query = {
    contents: ''
}

export async function fetchTranslation(translation) {
    // console.log(`${baseUrl}/${query.pokemon}/${pokemon}`)
    return fetch(`${baseUrl}${query.contents}${translation}`)
}
