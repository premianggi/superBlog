<template>
    <div>
    <section class="content">
      <div class="row justify-content-around">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Data Post List</h3>
              <div class="card-tools">
                <button class="btn btn-group">
                    <router-link to="/add-post" class="btn btn-default btn-outline-success">Add Post</router-link>    
                </button>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>User</th>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Photo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(post, index) in allpost" :key="post.id">
                        <td>{{index+1}}</td>
                        <td v-if="post.user">{{post.user.name}}</td>
                        <td v-if="post.category">{{post.category.cat_name}}</td>
                        <td>{{post.title}}</td>
                        <td>{{post.description | sortlength(20, "....")}}</td>
                        <td><img :src="post.photo" alt="" width="40" height="50"></td>
                        <td>
                          <a href="">Edit</a>
                          <a href="">Hapus</a>
                        </td>
                    </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    </div>
</template>

<script>
export default {
    name:"List",
    mounted() {
        this.$store.dispatch('getAllPost')
    },
    computed: {
        allpost(){
            return this.$store.getters.getAllPost
        }
    },
    methods:{

    }
}
</script>

<style>

</style>