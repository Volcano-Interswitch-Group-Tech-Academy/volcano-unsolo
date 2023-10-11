package com.interswitch.volcano.Unsolo.exceptions;

public class PostNotFoundException extends RuntimeException  //Cause its an unchecked exception
{

    //this is constructor overloading
    public PostNotFoundException()
    {

        super();
    }

    public PostNotFoundException(String msg)
    {

        super(msg);
    }
}
