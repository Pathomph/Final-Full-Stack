<template>
    <div>
        <h1>SUPPLIER </h1>
     
        <b-table striped hover :items="supplier_id" :fields="fields" :per-page="pageSize" :current-page="pageIndex"></b-table>
        
        <b-pagination size="md" :total-rows="products.length" :per-page="pageSize" v-model="pageIndex">
        </b-pagination>
    </div>
</template>


<script>
import axios from "axios";

export default {
  name: "Suppliers",

  data() {
    return {
      message: "Final Exam Full-Stack Web Development",
      products: [],
      pageSize: 10,
      pageIndex: 1,
      fields: [
        {key: "supplier_id",sortable: true},
        {key: "company_name",sortable: true},
        {key: "contact_name",sortable: true},
        {key: "contact_title",sortable: true},
        {key: "address", sortable: true},
        {key: "city",sortable: true},
        {key: "region",sortable: true},
        {key: "postal_code",sortable: true},
        {key: "country",sortable: true},
        {key: "phone",sortable: true},
        {key: "fax",sortable: true},
        {key: "homepage",sortable: true,variant: "danger" }
      ]
    };
  },
  mounted() {
    var instance = this;
    axios
      .get("")
      .then(function(response) {
        console.log(response.data);
        instance.customers = response.data.data;
      });
  }
};
</script>