<template>
    <div class="w-full max-w-md">
      <form
        @submit.prevent="add"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="product_name"
            >Product</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product_name"
            type="text"
            placeholder="Iphone 11 Pro"
            required
            v-model="product_name"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="product_url"
            >Product URL</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product_url"
            type="text"
            placeholder="https://amazon.com"
            required
            v-model="product_url"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="price"
            >Price</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            placeholder="1000"
            required
            v-model="price"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Ajouter
          </button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  name: "AddAlert",
  data() {
    return {
      product_name: null, 
      product_url: null,
      price: 1000,
      delay: 2
    };
  },
  methods: {
    add() {
      console.log(
        `add alert ! for ${this.product_name} -> ${this.product_url} at ${this.price}`
      );

      const payload ={
        'name': this.product_name,
        'url': this.product_url,
        'price': this.price,
        'delay': this.delay
      }

      this.post(`/api/alert`, payload);
    },
    post(url, payload) {
      fetch(url, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    }
  }
};
</script>
