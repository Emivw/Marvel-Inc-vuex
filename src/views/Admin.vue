<template>
  <div class="container-fluid table-responsive py-5" id="grad">

    <div class="site-heading text-center">
        <h2 class="text-white">Admin <span>Page</span></h2>
        <h4></h4>
      </div>

    <div class="row">
      <nav class="d-flex flex-row justify-content-between">
        <button type="button" id="addThis" class="btn btn"><router-link to="/">Home</router-link></button>
        <button type="button" class="btn" id="addThis" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
      </nav>
       <div class="container">
         <button @click="sortPrice">sort by price</button>
        <!-- <input type="text" v-model="search" placeholder="search..." /> -->
        <div class="row">
        <div class="col-md-4 d-flex flex-column">
         <label for="category">Category </label>
        <select v-model="category">
          <option value="All">All</option>
          <option value="Weapon">Weapon</option>
          <option value="Transport">Transport</option>
          <option value="Pet">Pet</option>
          <option value="Suit">Suit</option>
        </select>
        </div>
        <div class="col-md-4 d-flex flex-column">
        <label for="Power">power level </label>
                <select v-model="power">
          <option value="All">All</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
        </div>
        <div class="col-md-4 d-flex flex-column">
                <label for="price">price </label>
                <select v-model="price">
          <option value="All">All</option>
          <option value="4000">4000</option>
          <option value="6000000">6000000</option>
          <option value="800000000">800000000</option>
          <option value="100000000000">100000000000</option>
        </select>
        </div>
        </div>
      </div>
    </div>
  <div class="container table-responsive py-5 text-white">

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="createProduct">
        <label for="name"></label>
        <input type="text" name="" id="add-Name" placeholder="Enter Name" v-model="newTitle" required>
        <label for="img"></label>
        <input type="img" name="" id="add-Img" v-model="newImg" placeholder="Add Image" required>
        <label for="desc"></label>
        <input type="text" name="" id="add-Desc" v-model="newDesc" placeholder="Add Description" required>
        <label for="category"></label>
        <input type="text" name="" v-model="newCategory" id="add-Category" placeholder="Add Category Class" required>
        <label for="price"></label>
        <input type="number" name="" v-model="newPrice" id="add-Price" placeholder="Add Price Value" required>
        <label for="power"></label>
        <input type="number" name=""  v-model="newPower" id="add-Power" placeholder="Add Power Level" required>
        <label for="usedby"></label>
        <input type="text" name="" id="add-Usedby" v-model="newUsed_by" placeholder="Add User" required>
      <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save changes</button>
      </div>
    </form>
          </div>

    </div>
  </div>
</div>
    <table class="table table-bordered text-white">
      <thead class="thead-dark text-white">
        <tr class="">
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">img</th>
          <th scope="col">desc</th>
          <th scope="col">category</th>
          <th scope="col">price</th>
          <th scope="col">power</th>
          <th scope="col">used_by</th>
          <th scope="col">actions</th>
        </tr>
      </thead>

      <tbody >
        <tr v-for="product in products" 
    :key="product.id" 
    :product="product" class="">
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.title }}</td>
          <td><img :src="product.img" alt=""></td>
          <td>{{ product.desc }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.power }}</td>
          <td>{{ product["used_by"] }}</td>
          <td>
          <button><a><i class="bi bi-trash-fill" @click.prevent="$store.dispatch('deleteProduct',product.id)">Remove Item</i></a></button>
              <button
                type="button"
                class="btn"
                id="addThis"
                data-bs-toggle="modal"
                :data-bs-target="'#exampleModal' + product.id"
              >
                <i
                  class="bi bi-pencil-square"
                  @click="$store.dispatch('editProduct', product.id)"
                  >Edit Item</i
                >
              </button>
              <div
                class="modal fade"
                :id="'exampleModal' + product.id"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form @submit.prevent="editProduct">
                        <label for="name"></label>
                        <input
                          type="text"
                          name=""
                          id="add-Name"
                          placeholder="Enter Name"
                          v-model="product.title"
                          required
                        />
                        <label for="img"></label>
                        <input
                          type="img"
                          name=""
                          id="add-Img"
                          v-model="newImg"
                          placeholder="Add Image"
                          required
                        />
                        <label for="desc"></label>
                        <input
                          type="text"
                          name=""
                          id="add-Desc"
                          v-model="newDesc"
                          placeholder="Add Description"
                          required
                        />
                        <label for="category"></label>
                        <input
                          type="text"
                          name=""
                          v-model="newCategory"
                          id="add-Category"
                          placeholder="Add Category Class"
                          required
                        />
                        <label for="price"></label>
                        <input
                          type="number"
                          name=""
                          v-model="newPrice"
                          id="add-Price"
                          placeholder="Add Price Value"
                          required
                        />
                        <label for="power"></label>
                        <input
                          type="number"
                          name=""
                          v-model="newPower"
                          id="add-Power"
                          placeholder="Add Power Level"
                          required
                        />
                        <label for="usedby"></label>
                        <input
                          type="text"
                          name=""
                          id="add-Usedby"
                          v-model="newUsed_by"
                          placeholder="Add User"
                          required
                        />
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="submit"
                            class="btn btn-primary"
                            data-bs-dismiss="modal"
                          >
                            Save changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
   </div>

</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
 data() {
    return {
      search: "",
      category: "All",
      power: "All",
      price: "All",
      newTitle: "",
      newImg: "",
      newDesc: "",
      newCategory: "",
      newPrice: "",
      newPower: "",
      newUsed_by: "",
    };
  },
  name: "product",
  mounted() {
    return this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        // if (!product.title.toLowerCase().includes(this.search.toLowerCase())) {
        //   isMatch = false;
        // }
        if (this.category !== "All" && this.category !== product.category) {
          isMatch = false;
        }
        if (this.power !== "All" && this.power !== product.power) {
          isMatch = false;
        }        if (this.price !== "All" && this.price !== product.price) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  methods: {
    sortPrice() {
      this.$store.commit("sortProductsbyPrice");
    },
    deleteProduct(){
      return
      $store.dispatch('deleteProduct',product.id)
    },
    createProduct() {
         return this.$store.dispatch("createProduct", {
      title: this.newTitle,
      img: this.newImg,
      desc: this.newDesc,
      category: this.newCategory,
      price: this.newPrice,
      power: this.newPower,
      used_by: this.newUsed_by,
      })
      },
          editProduct() {
      return this.$store.dispatch("editProduct", {
        id: this.product.id,
      title: this.newTitle,
      img: this.newImg,
      desc: this.newDesc,
      category: this.newCategory,
      price: this.newPrice,
      power: this.newPower,
      used_by: this.newUsed_by,
      })
    }
  },
  components: { Modal }
}

</script>

<style>
li {
  list-style: none;
}
#grad{ 
    background-color: #F8002F;
background-image: linear-gradient(326deg, #F8002F 0%, #000C14 74%);
}
#addThis{
  text-decoration: underline;
  color:#a00000;
}
#addThis:hover{
color: white;
}
nav a{
  color:#a00000;

}
a:hover{
  color: white;}
  .site-heading h2 {
  display: block;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.site-heading h2 span {
  color: #a00000;
}

.site-heading h4 {
  display: inline-block;
  padding-bottom: 20px;
  position: relative;
  text-transform: capitalize;
  z-index: 1;
}

.site-heading h4::before {
  background: #a00000 none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 2px;
  left: 50%;
  margin-left: -25px;
  position: absolute;
  width: 50px;
}

td{
  color:white;
}
         
         .btn-grad {
            background-image: linear-gradient(to right, #000000 0%, #434343  51%, #000000  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
</style>
