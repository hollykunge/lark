<template>
  <div class="main-content">
    <Card dis-hover>
      <div class="search-con">
        <Row>
          <Col span="12">
            <RadioGroup v-model="radioProject" type="button">
              <Radio label="全部"></Radio>
              <Radio label="已完成"></Radio>
              <Radio label="未完成"></Radio>
            </RadioGroup>
          </Col>
          <Col span="12">
            <Input search placeholder="输入项目名称..."/>
          </Col>
        </Row>
      </div>

      <div class="table-content">
        <Table :data="projectList" :columns="projectColumns" stripe></Table>
      </div>

      <div style="margin: 12px;overflow: hidden">
        <div style="float: right;">
          <Page :total="100" :current="1" @on-change="changePage"></Page>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
  import {getTableData} from '@/api/user'

  export default {
    name: 'LarkTaskContent',
    data () {
      return {
        radioProject: '全部',
        projectColumns: [
          {
            title: '名称',
            key: 'name'
          },
          {
            title: '进度',
            key: 'status',
            render: (h, params) => {
              const row = params.row
              const color = row.status === 1 ? 'primary' : row.status === 2 ? 'success' : 'error'
              const text = row.status === 1 ? '进行中' : row.status === 2 ? '已完成' : '未完成'

              return h('Tag', {
                props: {
                  type: 'dot',
                  color: color
                }
              }, text)
            }
          },
          {
            title: '历时',
            key: 'last'
          },
          {
            title: '操作',
            key: 'action',
            width: 160,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, 'View'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, 'Delete')
              ])
            }
          }
        ],
        projectList: []
      }
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: 'User Info',
          content: `Name：${this.projectList[index].name}<br>Age：${this.projectList[index].age}<br>Address：${this.projectList[index].address}`
        })
      },
      remove (index) {
        this.projectList.splice(index, 1)
      },
      changePage () {
        // this.tableData1 = this.mockTableData1()
      }
    },
    mounted () {
      getTableData().then(res => {
        console.log(res.projectList)
        this.projectList = res.projectList
      })
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .main-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 36px;

    .table-content {
      height: 500px;
      flex: 1;
    }
  }

  .search-con {
    padding: 10px 0;
  }
</style>
