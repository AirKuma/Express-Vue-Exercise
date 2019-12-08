<template>
  <div class="hello">

    <div id="todo-list-example" class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <h1 class="text-center">Users</h1>
          <router-link to="/user">Create User</router-link>
          <table class="table">
            <tr v-for="(todo) in todos" v-bind:key="todo._id" v-bind:title="todo.account">
              <td class="text-left">{{todo.account}}</td>
              <td class="text-right">
                <router-link :to="{name: 'editeUser', params: {userId: todo._id} }">
                  <button class=" btn btn-info ">Edit</button>
                </router-link>
                <button v-on:click="deleteUser(todo._id)" class=" btn btn-danger ">Delete</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        todos: [],
        id: '',
        taskname: '',
        isEdit: false
      }
    },
    mounted() {
      this.getTasks()
    },
    methods: {
      getTasks() {
        axios.get('/api/users').then(
          result => {
            console.log(result.data)
            this.todos = result.data
          },
          error => {
            console.error(error)
          }
        )
      },
      deleteUser(id) {
        axios.delete(`/api/user/${id}`
        ).then((res) => {
          this.getTasks()
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>
