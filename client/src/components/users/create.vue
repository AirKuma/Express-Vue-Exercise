<template>
  <div class="hello">
    <div id="todo-list-example" class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <form v-on:submit.prevent="addNewUser">
            <label for="userinput">User Name</label>
            <input v-model="account" id="userinput" class="form-control" placeholder="Add New User">
            <button type="submit" class="btn btn-success btn-block  mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    methods: {
      addNewUser() {
        axios.post('/api/user',
          { account: this.account }
        ).then((res) => {
          this.$router.push('/');
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>
