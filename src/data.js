let Data={
    total:3,
    completed:0,
    list:{incomplete:[
    {
        title:'React APP',
        repeat:false,
        id:1
    },
    {
        title:'Svelte APP',
        repeat:false,
        id:2
    },
    {
        title:'Mongo APP',
        repeat:false,
        id:3
    }
],complete:[]}
}
export const changeComplete=(newData)=>{

};

export const changeIncomplete=(newData)=>{
    Data.list.incomplete=([...Data.list.incomplete,newData])
};
export {Data};