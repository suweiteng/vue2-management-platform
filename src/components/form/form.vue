<template>
  <section class="form-section">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="待办事项" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="事项类型" prop="type">
        <el-radio-group v-model="ruleForm.type">
          <el-radio label="1">常规</el-radio>
          <el-radio label="2">紧急</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="提醒方式" prop="way">
        <el-checkbox-group v-model="ruleForm.way">
          <el-checkbox label="短信"></el-checkbox>
          <el-checkbox label="电话"></el-checkbox>
          <el-checkbox label="邮件"></el-checkbox>
          <el-checkbox label="微信"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="提醒时间" required>
        <el-row>
          <el-form-item prop="date">
            <el-time-picker type="fixed-time" placeholder="选择提醒时间" v-model="ruleForm.date"
                            style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-row>
      </el-form-item>

      <el-form-item label="重复提醒" prop="delivery">
        <el-switch on-text="" off-text="" v-model="ruleForm.delivery" @change="changeOnOff"></el-switch>
      </el-form-item>
      <el-form-item label="重复时间" :required="redStar">
        <el-col :span="11">
          <el-form-item prop="starDate">
            <el-date-picker :disabled='forbidden' type="date" placeholder="选择开始日期" :picker-options="pickerOptionsStart"
                            v-model="ruleForm.starDate" @change="starTimeChang"  style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="1">&nbsp;-</el-col>
        <el-col :span="12">
          <el-form-item prop="endDate">
            <el-date-picker :disabled='forbidden' type="date" placeholder="选择结束日期" :picker-options="pickerOptionsOver"
                            v-model="ruleForm.endDate" @change="endTimeChang" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="重复周期" prop="period" :required="redStar">
        <el-select :disabled='forbidden' v-model="ruleForm.period" placeholder="请选择重复周期">
          <el-option label="每日提醒" value="1"></el-option>
          <el-option label="每周提醒" value="2"></el-option>
          <el-option label="每月提醒" value="3"></el-option>
          <el-option label="工作日提醒" value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="其他信息" prop="other">
        <el-input type="textarea" v-model="ruleForm.other"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        period: [
          {required: true, message: '请选择重复周期', trigger: 'change'}
        ],
        starDate: [
          {type: 'date', required: true, message: '请选择开始日期', trigger: 'change'}
        ],
        endDate: [
          {type: 'date', required: true, message: '请选择结束日期', trigger: 'change'}
        ],
        pickerOptionsStart: {
          disabledDate (time) {
            return time.getTime() < 1488297600000 || time.getTime() >= Date.now();
          }
        },
        pickerOptionsOver: {
          disabledDate (time) {
            return time.getTime() < 1488297600000 || time.getTime() >= Date.now();
          }
        },
        forbidden: true,
        redStar: false,
        ruleForm: {
          name: '',
          type: '',
          way: [],
          date: '',
          period: '',
          starDate: '',
          endDate: '',
          delivery: false,
          other: '',
        },
        rules: {
          name: [
            {required: true, message: '请输入待办事项名称', trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
          ],
          type: [
            {required: true, message: '请选择待办事项类型', trigger: 'change'}
          ],
          way: [
            {type: 'array', required: true, message: '请至少选择一个提醒方式', trigger: 'change'}
          ],
          date: [
            {type: 'date', required: true, message: '请选择提醒时间', trigger: 'change'}
          ],
          period: [],
          starDate: [],
          endDate: [],
          other: [
            {required: true, message: '请填写其他信息', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      getDate (strDate) {
        let st = strDate;
        let a = st.split(" ");
        let b = a[0].split("-");
        let date = new Date(b[0], b[1] - 1, b[2]);
        return date;
      },
      // 开始时间禁止晚于结束时间；
      starTimeChang (val) {
        const starTime = this.getDate(val);
        this.pickerOptionsOver = {
          disabledDate (time) {
            return time.getTime() <= starTime || time.getTime() >= Date.now();
          }
        }
      },
      // 结束时间禁止早于开始时间
      endTimeChang (val) {
        let endTime = this.getDate(val);
        this.pickerOptionsStart = {
          disabledDate (time) {
            return time.getTime() < 1488297600000 || time.getTime() >= endTime;
          }
        }
      },
      changeOnOff(val) {
        if (val === true) {
//          开启重复提醒功能，给表单验证添加相应规则，并添加红色星号。
          this.forbidden = false;
          this.redStar = true;
          this.$set(this.rules, "starDate", this.starDate);
          this.$set(this.rules, "endDate", this.endDate);
          this.$set(this.rules, "period", this.period);
          this.$refs['ruleForm'].validate();
        } else {
//          关闭重复提醒功能，将表单验证中的相应规则，替换为空，并移除红色星号。不能删除相关规则，否则无法重新验证了，残留表单验证信息。
          this.forbidden = true;
          this.redStar = false;
          this.$set(this.rules, "starDate", [{type: 'date', required: false, trigger: 'change'}]);
          this.$set(this.rules, "endDate", [{type: 'date', required: false, trigger: 'change'}]);
          this.$set(this.rules, "period", [{}]);
          this.$refs['ruleForm'].validate();
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let para = Object.assign({}, this.ruleForm);
            console.log(para);
            this.$message({
              message: "提交成功，请在控制台查看json!！",
              type: 'success'
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
  .form-section {
    padding: 10px;
    width: 500px;
  }
</style>
