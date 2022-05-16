import React from 'react'
import Search from '../components/Search'
import { fetchPokemon } from '../services/getPokemon'
import { fetchTranslation } from '../services/getTranslation'
import { Spinner } from 'react-bootstrap'
import {Card} from 'react-bootstrap'


export default function HomePage() {
    
    const [pokemon, setPokemon] = React.useState()
    const [loading, setLoading] = React.useState(false)
    const [translation, setTranslation] = React.useState()
    var desc;
    
    const getPokemon = async (query) => {
        try{
        setLoading(true)
        const response = await fetchPokemon(query)
        // console.log(response)
        const results = await response.json()
        // console.log(results)
        setPokemon(results)
        desc = results.flavor_text_entries[0].flavor_text
        // console.log(desc)
        desc = desc.split('\n').join(' ')
        desc = desc.split(' ').join('%20')
        const resp = await fetchTranslation(desc)
        console.log(resp)
        const res = await resp.json()
        console.log(res)
        setTranslation(res)
        setLoading(false)}
        catch (err) {
            console.log('error')
            window.alert("Sorry, you've either made a typo or you've hit the rate limit. Please either check your spelling or try again in an hour.")

        }
        finally {
            setLoading(false)
        }
        
    }

    return (
        <div>
            <Search getPokemon={getPokemon}/>
            <h5>{}</h5>
            {loading ? (<Spinner animation="border" />) :null}
            {!loading && pokemon ? (
                <Card className="text-center">
                <Card.Header>
                    <h5 style={{textTransform: 'uppercase'}}>{pokemon.name}</h5>
                </Card.Header>
                <Card.Body>
                    <h6>DESCRIPTION:</h6>
                    <span>{translation.contents.translated}</span>
                </Card.Body>
            </Card>
            ): null}
        </div>
    )
}