import { redirect } from "react-router-dom";
import url from "./url";

// Create Action
export const createAction = async ({request}) => {
    // parse form data
    const formData = await request.formData();

    // construct new body
    const newAthlete = {
        name: formData.get('name'),
        age: formData.get('age'),
        sport: formData.get('sport'),
        team: formData.get('team'),
        position: formData.get('position'),
        year: formData.get('year'),
        image: formData.get('image')
    }

    // request to create a new athlete
    await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAthlete)
    })

    // redirect to index
    return redirect('/')
}

// Update Action
export const updateAction = async ({request, params}) => {
    // grabbing the id
    const id = params.id
    // parse the form data
    const formData = await request.formData();
    // construct updated athlete
    const updatedAthlete = {
        name: formData.get('name'),
        age: formData.get('age'),
        sport: formData.get('sport'),
        team: formData.get('team'),
        position: formData.get('position'),
        year: formData.get('year'),
        image: formData.get('image')
    }
    console.log(url+id)
    // request to update athlete
    await fetch(url + id + '/', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedAthlete)
    })

    // redirect to show page
    return redirect(`/athletes/post/${id}`)
}

// Delete Action
export const deleteAction = async ({params}) => {
    // grabbing id
    const id = params.id

    // making a delete request
    await fetch(url + id, {
        method: 'delete',
    })

    // redirect back to index
    return redirect('/')
}