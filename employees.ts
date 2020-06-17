import { Employee } from "./types.ts";
import ShortUniqueId from "https://cdn.jsdelivr.net/npm/short-unique-id@latest/short_uuid/mod.ts";

let employees: Employee[] = [
  {
    id: "1",
    name: "michael",
    age: 24,
  },
  {
    id: "2",
    name: "alex",
    age: 25,
  },
  {
    id: "3",
    name: "deny",
    age: 26,
  },
];

// 获取所有员工
const getEmployees = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: employees,
  };
};

// 获取一个员工
const getEmployee = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const hadEmployee = employees.find((employee) => employee.id == params.id);
  if (hadEmployee) {
    response.body = {
      success: true,
      data: hadEmployee,
    };
  } else {
    response.body = {
      success: false,
      data: "no employee found",
    };
  }
};

//新增

const addEmployee = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  const newEmployee = body.value;
  const uid = new ShortUniqueId();
  newEmployee.id = uid();
  employees.push(newEmployee);
  response.body = {
    success: true,
    msg: newEmployee,
  };
};

//修改

const updateEmployee = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  const updateEmployee = body.value;
  if (updateEmployee.id) {
    const index = employees.findIndex((e) => e.id === updateEmployee.id);
    if (index !== -1) {
      console.log("index:" + index);
      employees[index] = updateEmployee;
      response.body = {
        success: true,
        msg: updateEmployee,
      };
    } else {
      response.body = {
        success: false,
        msg: "no employee found",
      };
    }
  }
};

// 删除
const deleteEmployee = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  employees = employees.filter((e) => e.id !== params.id);
  response.body = {
    success: true,
    msg: `Employee ${params.id} was deleted`,
  };
};

export {
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
