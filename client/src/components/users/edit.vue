<template>
  <div class="hello">
    <div id="todo-list-example" class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <form v-on:submit.prevent="updateUser" id="userData">
            <label for="userinput">User Name</label>
            <input v-model="data.account" id="userinput" class="form-control" placeholder="Update User">
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
    data() {
      return {
        data: {}
      }
    },
    mounted() {
      this.getUser()
    },
    methods: {
      getUser() {
        console.log(this.$route.params.userId);
        axios.get('/api/user/' + this.$route.params.userId).then(
          result => {
            console.log(result.data)
            this.data = result.data
          },
          error => {
            console.error(error)
          }
        )
      },
      updateUser() {
        axios.put('/api/user/' + this.data._id,
          this.data
        ).then((res) => {
          console.log(res)
          alert(res);
          location.reload();
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>
