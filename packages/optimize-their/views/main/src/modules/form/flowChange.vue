<template>
 <div>
    <div class="modal-btn" @click="show">创建新流水</div>
    <div class="form-box" v-if="modalSwicth" @click.stop="close">
      <div class="form-main" @click.stop="show">
        <input
          class="form-input"
          @keyup="test"
          type="string"
          name=""
          id=""
          v-model="formData.name"
          placeholder="name"
        />
        <input
          class="form-input"
          @keyup="test"
          type="number"
          name=""
          placeholder="value"
          id=""
          v-model="formData.value"
        />
        <input
          class="form-input"
          @keyup="test"
          type="string"
          name=""
          id=""
          placeholder="mark"
          v-model="formData.mark"
        />
        <input
          class="form-input"
         type="date" name="" id=""
          v-model="formData.date"
        >

        <select aria-placeholder="from" class="form-select" name="" id="" v-model="formData.from">
          <option v-for="(item, index) of config" :key="index" :value="item">{{
            item.name
          }}</option>
        </select>

        <select aria-placeholder="to" class="form-select" name="" id="" v-model="formData.to">
          <option v-for="(item, index) of config" :key="index" :value="item">{{
            item.name
          }}</option>
        </select>
        <div class="form-btn" @click.stop="updateData">提交</div>
      </div>
    </div>
  </div>
</template>
<script>
import { inject, onMounted, ref, reactive, provide, readonly } from "vue";
export default {
  name: "Home",
  components: {},
  setup() {
    const electron = inject("electron");
    const config = ref([]);
    const formData = reactive({name: null,value: null,mark: null,date: null,from: null,to: null});
    const modalSwicth = ref(true);
    function getPageData(data) {
      electron.ipcRenderer
        .invoke("getHomeDatagagagagagagaga", JSON.stringify(data))
        .then(result => {
          console.info(result);
          close();
        });
    }
    function getPageDatasel() {
      electron.ipcRenderer.invoke("getHomeDataasafwafawfa").then(result => {
        config.value = result;
      });
    }
    function updateData() {
      if(Object.keys(formData).filter(item=>formData[item]===(void 0) || formData[item]===null).length > 0 ){
          alert("必填啊！");
          return false;
      }
      getPageData(formData);
    }
    function test(event) {
      if (event.keyCode === 13) {
        updateData();
      }
    }
    function close() {
      if (modalSwicth.value === true) modalSwicth.value = false;
    }
    function show() {
      if (modalSwicth.value === false) modalSwicth.value = true;
    }
    getPageDatasel();
    return { updateData, formData, config, modalSwicth, show, close, test };
  }
};
</script>
<style scoped lang="less">
.form-box {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.2);
}
.form-main {
  position: absolute;
  box-shadow: 0px 0px 10px 10px rgba(200, 200, 200, 1);
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background: rgba(144, 199, 190, 0.52);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.form-input {
  width: 100%;
  border-radius: 2px;
  border: 0;
  box-sizing: border-box;
  background: rgb(54, 110, 101);
  font-size: 18px;
  line-height: 30px;
  height: 30px;
  box-shadow: inset 0px 0px 10px -4px rgba(0, 0, 0, 0.644);
  color: #fff;
}
.form-select {
  width: 100%;
  border-radius: 2px;
  border: 0;
  box-sizing: border-box;
  background: rgb(54, 110, 101);
  font-size: 18px;
  line-height: 30px;
  height: 30px;
  box-shadow: inset 0px 0px 10px -4px rgba(0, 0, 0, 0.644);
  color: #fff;
}
.form-btn {
  width: 100%;
  border-radius: 2px;
  border: 0;
  box-sizing: border-box;
  background: rgb(54, 110, 101);
  font-size: 18px;
  line-height: 30px;
  height: 30px;
  box-shadow: inset 0px 0px 10px -4px rgba(0, 0, 0, 0.644);
  color: #fff;
  text-align: center;
}
.modal-btn {
  background: rgb(54, 110, 101);
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  width: 100px;
  text-align: center;
}

input:focus{
  outline:0 ;
}
</style>
