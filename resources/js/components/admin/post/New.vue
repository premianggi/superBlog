<template>
    <div class="container-fluid">
        <div class="row justify-content-around">
          <!-- left column -->
          <div class="col-md-10">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add New Post</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form">
                <div class="card-body">
                  <div class="form-group">
                    <label for="postId">Add New Post</label>
                    <input type="text" class="form-control" id="postId" placeholder="Enter add new post..." v-model="form.title" name="title" :class="{ 'is-invalid': form.errors.has('title') }">
                    <has-error :form="form" field="title"></has-error>
                  </div>
                  <div class="form-group">
                    <label for="descriptionId">Add New Description</label>
                    <textarea class="form-control" id="descriptionId" placeholder="Enter add new description..." v-model="form.description" name="description" :class="{ 'is-invalid': form.errors.has('description') }"></textarea>
                    <has-error :form="form" field="description"></has-error>
                  </div>
                  <div class="form-group">
                  <label>Select</label>
                  <select class="form-control">
                    <option disabled>Select One</option>
                    <option v-for="category in getallCategory">{{category.cat_name}}</option>
                  </select>
                  <has-error :form="form" field="cat_id"></has-error>
                </div>
                
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- /.row -->
      </div>
</template>

<script>
export default {
    name:"New",
    data(){
      return{
        form: new Form({
          title:'',
          description:'',
          cat_id:'',
          photo:'', 
        })
      }
    },
    mounted(){
       this.$store.dispatch("allCategory")
    },
    computed:{
      getallCategory(){
        return this.$store.getters.getCategory
      }
    },
    methods:{
     
    }
}
</script>
  
<style>

</style>