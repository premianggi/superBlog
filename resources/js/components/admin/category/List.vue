<template>
    <div>
    <section class="content">
      <div class="row justify-content-around">
        <div class="col-8">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Data Category List</h3>
              <div class="card-tools">
                <button class="btn btn-group">
                    <router-link to="/add-category" class="btn btn-default btn-outline-success">Add Category</router-link>    
                </button>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>Category Name</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(category,index) in getallCategory" :key="category.id">
                        <td>{{index+1}}</td>
                        <td>{{category.cat_name}}</td>
                        <td>{{category.created_at | timeformat}}</td>
                        <td>
                          <router-link :to="`/edit-category/${category.id}`" class="btn btn-default btn-outline-info">Edit</router-link>
                          <a href="" @click.prevent = "deletecategory(category.id)" class="btn btn-default btn-outline-danger">Hapus</a>
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
        name: "List",
        mounted() {
          this.$store.dispatch("allCategory")
        },
        computed:{
          getallCategory(){
            
            return this. $store.getters.getCategory
          }
         
        },
        methods:{
          deletecategory(id){
            // console.log(id)
            axios.get('/category/'+id)
            .then(()=>{
              this.$store.dispatch("allCategory")
            })
          }
        }
    }
</script>

<style scoped>

</style>