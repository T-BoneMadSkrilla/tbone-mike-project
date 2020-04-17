<template>
    <div class="wrapper">
        <h3>
        Student Upload
        </h3>
        <form class="excelCard">
            <div>
                <label for="file">Select a file:</label>
                <input type="file" id="file" name="file">
            </div>
            <input class="excelBtn" type="submit">
        </form>
    </div>
</template>

<script>
export default {
    name: "StudentUpload"
}
</script>

<style scoped>
  .wrapper {
    margin-left: 15%;
    text-align: center;
    width: 85%;
    min-height: 720px;
    border-style: double;
    background: #fafafa;
  }

  .excelCard{
    margin: 0 auto;
    margin-top: 10px;
    background: #e8e8e8;
    width: 500px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .excelBtn{
    margin: 0 auto;
    height: 30px;
    width: 70px;
    background-color: #4caf50;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 13px;
    cursor: pointer;
  }

</style>