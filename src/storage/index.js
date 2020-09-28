const STORAGE_KEY = 'mall'

export default{
    //存储值
    setItem(key){
        
    },
    //获取值
    getItem(key,module_name){
        return this.getStorage()[key]
    },
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY || '{}' ))
    },
    clear(){}
}