//import Vue from 'vue@next'

//alert('Vue version : ${Vue.version}');

const App = {
    data() {
        return {
            title: Vue.version,
            input: {
                value: '',
                placeholder: 'Type your note',
            },
            notes: [],
        }
    },
    mounted() {
        this.getNotes();
    },
    watch: {
        notes: {
            handler(updatedList) {
                localStorage.setItem("notes", JSON.stringify(updatedList));
            },
            deep:true,
        }
    },
    methods: {
        getNotes () {
            const localNotes = localStorage.getItem("notes");
            if (localNotes) {
                this.notes = JSON.parse(localNotes);
            }
        },
        onSubmit() {
            this.notes.push(this.input.value);
            //reset
            this.input.value = "";
            console.log(this.input);
        },
        remove(index) {
            this.notes.splice(index, 1);
        }
    }

}
Vue.createApp(App).mount("#app");