import Axios from "axios"

export default {
    state:{
        category:[],
        post:[]
    },
    getters:{
        getCategory(state){
            return state.category
        },
        getAllPost(state){
            return state.post
        }
    },
    actions:{
        allCategory(context){
            Axios.get('/category')
            .then((response)=>{
               context.commit('categoreis', response.data.categoriest) 
            })
        },
        getAllPost(context){
            Axios.get('/post')
                .then((response)=>{
                    console.log(response.data.posts)
                    context.commit('allpost',response.data.posts)
                })
        }

    },
    mutations:{
        categoreis(state, data){
            return state.category = data
        },
        allpost(state, payload){
            return state.post = payload
        }
    }
}