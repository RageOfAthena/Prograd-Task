import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "@aws-cdk/aws-s3";
import * as cdk from "aws-cdk-lib";

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    const bucket = new s3.Bucket(this, "CdkTestBucket", {
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
    });
  }
}
