<template>
  <div style="display:flex">
    <div style='flex:1'>
      <el-card>
        <div>
          <el-table
            :data="
              tableData.slice(
                (currentPage - 1) * pagesize,
                currentPage * pagesize
              )
            "
            style="width: 100%"
          >
            <el-table-column label="#" width="50">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.$index + 1 }}</span>
              </template>
            </el-table-column>
            <el-table-column label="标题" width="200">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column label="作者" width="150">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.author }}</span>
              </template>
            </el-table-column>
            <el-table-column label="类目" width="150">
              <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium" v-if="scope.row.category === 'Vue'">{{
                    scope.row.category
                  }}</el-tag>
                  <el-tag
                    type="success"
                    v-if="scope.row.category === 'React'"
                    >{{ scope.row.category }}</el-tag
                  >
                  <el-tag type="info" v-if="scope.row.category === 'Note.js'">
                    {{scope.row.category}}
                 </el-tag>
                  <el-tag
                    type="warning"
                    v-if="scope.row.category === '性能优化'"
                    >{{ scope.row.category }}</el-tag
                  >
                  <el-tag
                    type="danger"
                    v-if="scope.row.category === 'JavaScript'"
                    >{{ scope.row.category }}</el-tag
                  >
                  <el-tag type="info" v-if="scope.row.category === '小程序'">
                    {{scope.row.category}}
                  </el-tag>
                  <el-tag
                    type="warning"
                    v-if="scope.row.category === '工具类'"
                    >{{ scope.row.category }}</el-tag
                  >
                  <el-tag type="danger" v-if="scope.row.category === '其他'">{{
                    scope.row.category
                  }}</el-tag>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="来源" width="150">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.source }}</span>
              </template>
            </el-table-column>
            <el-table-column label="重要性" width="150">
              <template slot-scope="scope">
                <span style="margin-left: 10px">
                <el-rate
                  v-model="scope.row.star"
                  disabled
                  text-color="#ff9900">  
                </el-rate></span>
              </template>
            </el-table-column>
            <el-table-column label="发布时间" width="150">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.time }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="250">
              <template slot-scope="scope">
                <div class="buttoms">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                    >编辑</el-button
                  >
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button
                  >
                  <el-button type="success" size="mini" @click="handleEdit1(scope.$index, scope.row)">查看</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
          <div>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tableData.length"
            ></el-pagination>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        value: '',
      arr: [],
      tableData: [],
      num111: 0,
      currentPage: 1,
      pagesize: 10,
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({
        path:'/Compile',
        query:{msg:JSON.stringify(this.tableData[index])}
      })
    },
    handleEdit1(index, row) {
      console.log(index, row);
      this.$router.push({
        path:'/Look',
        query:{msg:JSON.stringify(this.tableData[index])}
      })
    },
    handleDelete(index, row) {
      // console.log(row._id);
      axios
        .post("/api/article/delete", { _id: row._id })
        .then((res) => {
          if (res.data.code === 200) {
            this.num111 = this.tableData.length;
            this.tableData.splice(index, 1);
          }
        })
        .catch((err) => {
          console.log(err);
        });
        if((this.tableData.length-1)%10===0){
          this.currentPage-=1 
        } console.log(this.tableData.length)
    },
  },
  mounted() {
    axios
      .get("/api/article/allArticle")
      .then((res) => {
        if (res.data.code) {
          this.arr = res.data.data;
          this.arr.map((item) => {
            item.time = dayjs(item.date).format("YYYY年MM月DD日HH时mm分ss秒")
            item.star=Number(item.star)
          });
        }
        //    console.log(this.arr.data)
        this.tableData = this.arr;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.buttoms {
  display: flex;
}
</style>
