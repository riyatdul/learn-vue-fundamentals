<template>
    <h2>This Component(DOM)</h2>
    <h1>{{ title }}</h1>
    <button @click="updateTitle">Update</button>
</template>

<script>
export default {
    // components: <- component's MyComponent
    data:()=>({
            title: "I'm Title"
        }
    ),
    methods:{
        updateTitle(){
            this.title = "new title"
        }
    },
    beforeCreate(){
        console.log("BEFORE CREATE",this.title) //undefined
    },
    beforeMount(){
        console.log("BEFORE MOUNT",this.title)
    },
    mounted(){
        console.log("MOUNTED -> DOM",this.title)
    },
    beforeUpdate(){
        console.log("BEFORE UPDATE",this.title)
    },
    updated(){
        console.log("UPDATED->DOM",this.title)
    }
}
</script>