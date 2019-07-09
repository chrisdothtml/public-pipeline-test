FROM uber/web-base-image:10.15.3

WORKDIR /public-pipeline-test
COPY . /public-pipeline-test/
RUN yarn
