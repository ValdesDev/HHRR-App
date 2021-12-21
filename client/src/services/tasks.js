import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";
import { internalServerError, successStatus } from "./auth";

const tasksService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/tasks`
});


export function createTask(task) {
  return tasksService
  .post("/create",task, {
    headers: { 
      Authorization: USER_HELPERS.getUserToken() 
    }
  })
  .then(successStatus)
  .catch(internalServerError)
}

export async function getMyTasks(){
  try{
    const responseMyTasks = await taskService.get("/my-tasks",{
      headers: {
        Authorization: USER_HELPERS.getUserToken()
      }
    });
    return successStatus(responseMyTasks);
  }catch(err){
    return internalServerError(err);
  }
}