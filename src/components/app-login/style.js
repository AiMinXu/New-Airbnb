import styled from "styled-components";

export const LoginAndRegiserWrapper = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  > .content {
    width: 1032px;
    margin: 0 auto;
    margin-top: 30px;

  }
  .loginAndRegisterBox{
    margin: 45px auto;
    padding: 25px 40px;
    width: 550px;
    background-color: #fff;
  }

  .title1{
    margin: 16px auto;
    > h2{
      font-weight: bolder;
      font-size: 28px;
      padding-bottom: 5px;
    }
  }
  .item{
    height: 46px;
  }

  .login-form-button{
    width: 100%;
    height: 50px;
    border-radius: 4px;
    font-weight: 800;
    border-color: transparent;
    font-size: 16px;
    line-height: 24px;
    padding-top: 10px;
    background-color: #008489;
  }

  .register-form-button{
    width: 100%;
    height: 50px;
    border-radius: 4px;
    font-weight: 800;
    border: 2px solid #000;
    font-size: 16px;
    line-height: 16px;
    padding-top: 10px;
    text-align: center;
    color: #000;

    .wechat{
      margin-right: 10px;
      font-size: 18px;
    }
  }

  .other-form-button{
    width: 100%;
    margin: 10px auto;
    color: #000;
    font-size: 16px;
    font-weight: 800;
    .mail{
      color: #008489;
      margin-right: 8px;
    }
  }
  .or{
    position: relative;
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: center;
    overflow: hidden;

      &::before{
        content: '1';
        position: absolute;
        border-bottom: 1px solid red;
        top: 50%;
        right: 100%;
        width: 5000px;
      }

      &::after{
        content: "" !important;
        position: absolute !important;
        border-bottom: 1px solid rgb(228, 228, 228) !important;
        top: 50% !important;
        left: 100% !important;
        width: 5000px !important;
      }

    .text{
      margin: 0;
      overflow-wrap: break-word;
      color: rgb(118, 118, 118);
      font-size: 14px;
      line-height: 1.28571em;
    }
  }


`
