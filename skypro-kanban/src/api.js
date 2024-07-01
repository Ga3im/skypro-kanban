
export async function getCards(token){
    const responce = await fetch('https://wedev-api.sky.pro/api/kanban', {
        headers:{
            Authorization: `Bearer ${token}`
        },
        method:"GET"
    })
    if (!responce.ok) {
        throw new Error('Не удалось загрузить данные')
    }
    const data = await responce.json()
    return data
}

export async function postCards(card){
    const responce = await fetch('https://wedev-api.sky.pro/api/kanban', {
        headers:{
            Authorization: `Bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify({
            card
        })
    })
    const data = await responce.json()
    return data
}

export async function register({login, name, password}){
    const responce = await fetch('https://wedev-api.sky.pro/api/user', {
        method: "POST",
        body: JSON.stringify({
            login,
            name,
            password,
        })
    })
    if(responce.status === 400){
        throw new Error('Пользователь с таким логином уже сущетсвует')
    }
    if (!responce.ok) {
        throw new Error('Не удалось загрузить данные')
    }
    const data = await responce.json()
    return data
}

export async function login({login, password}){
    const responce = await fetch('https://wedev-api.sky.pro/api/user/login', {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        })
    })
    if(responce.status === 400){
        throw new Error('Передан неправильный логин или пароль')
    }
    if (!responce.ok) {
        throw new Error('Не удалось загрузить данные')
    }
    const data = await responce.json()
    return data
}