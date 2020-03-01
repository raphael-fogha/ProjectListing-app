const initState = {
    projects:[
        {id:'1', title:'Le premier', content :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sit fugiat iste sapiente voluptate, itaque possimus ut quod tempora nemo laboriosam necessitatibus. Quia consequuntur aspernatur dolor odit possimus, molestias quasi.'},
        {id:'2', title:'Le deuxieme', content :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sit fugiat iste sapiente voluptate, itaque possimus ut quod tempora nemo laboriosam necessitatibus. Quia consequuntur aspernatur dolor odit possimus, molestias quasi.'},
        {id:'2', title:'Le trosisieme', content :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sit fugiat iste sapiente voluptate, itaque possimus ut quod tempora nemo laboriosam necessitatibus. Quia consequuntur aspernatur dolor odit possimus, molestias quasi.'}
    ]
}

const projectReducer = (state = initState, action) => {
   switch(action.type){
       case "CREATE_PROJECT":
           console.log('created project',action.project);
           return state;
        case "CREATE_PROJECT_ERROR" :
            console.log('create project error', action.err)
            return state;
        default:
            return state;
   }
}

export default projectReducer