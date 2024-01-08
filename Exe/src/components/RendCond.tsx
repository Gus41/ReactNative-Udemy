export default (props:any)=>{
    if(props.test){
        return props.children
    }
    return false
}