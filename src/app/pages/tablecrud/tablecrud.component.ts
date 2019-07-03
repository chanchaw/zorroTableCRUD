import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';
import { Input } from '@angular/compiler/src/core';




@Component({
  selector: 'app-tablecrud',
  templateUrl: './tablecrud.component.html',
  styleUrls: ['./tablecrud.component.css']
})
export class TablecrudComponent implements OnInit {

  editCache: { [key: string]: any } = {};
  listOfData: any[] = [];

  @ViewChild("ctlName",{static:false})
  ctlName:ElementRef;

  country:string = "";
  countries = [
    {sid:'Chinese',name:'中国'},
    {sid:'America',name:'美国'},
    {sid:'Japanese',name:'日本'},
  ];

  categories = [
    { sid:'gys',name:'供应商'},
    { sid:'kh',name:'客户'},
    { sid:'jgs',name:'加工商'},
  ]

  cols = [
    { fieldName:'id',caption:'编号',visible:false,seq:1,colWidth:1,width:'1%',alignCaption:'center',alignContent:'center',visibility:'hidden',display:'none'},
    { fieldName:'name',caption:'名称',visible:true,seq:2,colWidth:10,width:'10%',alignCaption:'center',alignContent:'center',visibility:'visible',display:'compact'},
    { fieldName:'age',caption:'年龄',visible:true,seq:3,colWidth:5,width:'5%',alignCaption:'right',alignContent:'right',visibility:'visible',display:'compact'},
    { fieldName:'address',caption:'地址',visible:true,seq:4,colWidth:10,width:'25%',alignCaption:'center',alignContent:'center',visibility:'visible',display:'compact'},
    { fieldName:'category',caption:'所属分类',visible:true,seq:5,colWidth:10,width:'10%',alignCaption:'center',alignContent:'center',visibility:'visible',display:'compact'},
    { fieldName:'date',caption:'修改日期',visible:true,seq:6,colWidth:10,width:'15%',alignCaption:'center',alignContent:'center',visibility:'visible',display:'compact'},
  ]

  colsShow = [
    { fieldName:'name',caption:'名称',visible:true,seq:2,colWidth:10,width:'10%',alignCaption:'center',alignContent:'center',visibility:'visible',display:'compact'},
    { fieldName:'age',caption:'年龄',visible:true,seq:3,colWidth:5,width:'5%',alignCaption:'right',alignContent:'right',visibility:'visible',display:'compact'},
    { fieldName:'address',caption:'地址',visible:true,seq:4,colWidth:10,width:'25%',alignCaption:'center',alignContent:'center',visibility:'visible',display:'compact'},
    { fieldName:'category',caption:'所属分类',visible:true,seq:5,colWidth:10,width:'10%',alignCaption:'center',alignContent:'center',visibility:'visible',display:'compact'},
    { fieldName:'date',caption:'修改日期',visible:true,seq:6,colWidth:10,width:'15%',alignCaption:'center',alignContent:'center',visibility:'visible',display:'compact'},
  ]

  constructor(
    private noti:NzNotificationService
  ){
    console.log(this.cols);
  }


  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);

    //#region 新增的行取消编辑则删除元素
    console.log('index=' + index);
    console.log(this.editCache[index]);
    if(this.editCache[index].isNew === true){
      console.log('本行是新增的行');
      this.listOfData = this.listOfData.filter(
        item => {
          console.log(item);
          console.log(item.id!==id);
          return item.id !== id;
        }
      );
    }else{
      console.log('本行不是新增的行');
    }
    //#endregion


    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false,isNew:false
    };

  }

  saveEdit(id: string): void {
    if(this.check4Save(id)===false) return;

    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
  
    this.editCache[id].edit = false;
    this.editCache[id].isNew = false;
  }

  check4Save(id:string):boolean{
    if(this.editCache[id].data.name.length<=0){
      this.noti.blank("操作失败","名称为必填项！");
      this.ctlName.nativeElement.focus();
      return false;
    }
    return true;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        isNew: false,
        data: { ...item }
      };
    });
  }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this.listOfData.push({
        id: `${i}`,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
        category: `category ${i}`,
        date: `Date ${i}`
      });
    }
    this.updateEditCache();
  }


  deleteRow(id){
    this.listOfData = this.listOfData.filter(
      item => {
        return item.id !== id;
      }
    )
  }

  addNewRow(){
    var newIndex:string = this.listOfData.length.toString();
    var newItem = { id:newIndex,name:'',age:13,address:'',category:'',date:''};

    console.log('进入了新增方法内' + this.listOfData.length);

    this.listOfData = this.listOfData.concat(newItem);
    //this.listOfData = this.listOfData.splice(this.listOfData.length,0,newItem);
    // this.listOfData.push({ id:newIndex.toString(),name:'',age:13,address:'',category:'',date:''});
    console.log(this.listOfData);
    this.editCache[newIndex] = {
      edit: true,
      isNew: true,
      data: { ...this.listOfData[newIndex] }
    };
    console.log(this.editCache);
  }


  printList(event){
    console.log(this.listOfData);
  }

}
