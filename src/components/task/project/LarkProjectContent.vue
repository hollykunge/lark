<template>
  <div class="main-content">
    <Input search placeholder="Enter something..." />
    <Table :data="projectList" :columns="projectColumns" stripe></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>

<script>
  import { getTableData } from '@/api/user'
  export default {
    name: 'LarkTaskContent',
    data () {
      return {
        projectColumns: [
          {
            title: '名称',
            key: 'name'
          },
          {
            title: '进度',
            key: 'progress',
            render: (h, params) => {
              const row = params.row
              const color = row.status === 1 ? 'primary' : row.status === 2 ? 'success' : 'error'
              const text = row.status === 1 ? 'Working' : row.status === 2 ? 'Success' : 'Fail'

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
    height: 100%;
    margin: 36px;
  }
</style>
