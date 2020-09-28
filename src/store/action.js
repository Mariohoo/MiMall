//vuex - action
export default {
    saveUserName(content,username){
        content.commit('saveUserName',username)
    },
    saveCartCount(content,count){
        content.commit('saveCartCount',count)
    }
}