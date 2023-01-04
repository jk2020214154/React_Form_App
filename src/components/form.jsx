import React, { Component } from 'react';


class Form extends Component {
    state = { 
        datas: [
           {key:11,num:4709,title:"三元组-树状数组 or 权值线段树",views:38},
           {key:15,num:253,title:"普通平衡树(Splay伸展树)",views:72},
           {key:16,num:788,title:"三种方式求解逆序对的数量(归并排序,树状数组(正序处理和逆序处理)+离散化,线段树+离散化)",views:57},
           {key:18,num:253,title:"普通平衡树(权值线段树维护+离散化)",views:69},
           {key:14,num:"1485C",title:"Floor and Mod(数论)",views:59},
           {key:12,num:179,title:"kuangbin_2.1八数码(搜索进阶)--八大境界之六境界",views:82},
           {key:25,num:4227,title:"kuangbin_1.14找路(简单搜索)",views:114},
           {key:30,num:4226,title:"kuangbin_1.13非常可乐(简单搜索)",views:116},
           {key:72,num:4225,title:"kuangbin_1.12石油储备(简单搜索)",views:80},
           {key:65,num:1076,title:"kuangbin_1.11迷宫问题(简单搜索)",views:56},
           {key:53,num:4224,title:"kuangbin_1.10起火迷宫(简单搜索)",views:105},
           {key:45,num:4223,title:"kuangbin_1.9点火游戏(简单搜索)",views:134},
           {key:47,num:4222,title:"kuangbin_1.8罐子(简单搜索)",views:141},
           {key:59,num:4221,title:"kuangbin_1.7洗牌(简单搜索)",views:134},
           {key:76,num:4220,title:"kuangbin_1.6质数路径(简单搜索)",views:150},
           {key:63,num:4219,title:"kuangbin_1.5找倍数(简单搜索)",views:166},
           {key:39,num:4218,title:"kuangbin_1.4翻转(简单搜索)",views:136},
           {key:21,num:1100,title:"kuangbin_1.3抓住那头牛(简单搜索)",views:72},
           {key:48,num:1096,title:"kuangbin_1.2地牢大师(简单搜索)",views:67},
           {key:32,num:1114,title:"kuangbin_1.1棋盘问题(简单搜索)",views:71},
        ]

     } 


    handleDelete=(example)=>{
        const tempdatas=this.state.datas.filter(data=>data!==example);
        this.setState(
            {
            datas: tempdatas,
        });
    }

    render() { 
        if(this.state.datas.length===0){
            return <p>无表单列表了</p>
        }
        return (
            <table className="table table-striped table-bordered border-primary align-middle">
                <thead>
                    <tr align="center">
                        <th className='table-primary'>#</th>
                        <th className='table-success'>标题</th>
                        <th className='table-warning'>阅读量</th>
                        <th className='table-info'>删除操作</th>
                    </tr>
                </thead>
                <tbody >
                    {this.state.datas.map(data=>(
                        <tr key={data.key}>
                            <td>{data.num}</td>
                            <td>{data.title}</td>
                            <td align="center">{data.views}</td>
                            <td align="center">
                                <button onClick={()=>this.handleDelete(data)} className='btn btn-outline-danger'>删除</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        );
    }
}
 
export default Form;