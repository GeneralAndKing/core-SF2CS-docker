# Docker image for springboot file run
# VERSION 0.0.1
FROM openjdk:11.0.6
RUN apt-get update
RUN apt-get install gcc g++ git  cmake -y
RUN mkdir /tempDir
RUN ls /usr/local/openjdk-11
RUN cd /tempDir && git clone https://github.com/seetafaceengine/SeetaFace2.git
RUN ls
RUN cd /tempDir/SeetaFace2 && mkdir build && cd build && cmake .. -G"Unix Makefiles" -DCMAKE_INSTALL_PREFIX=`pwd`/install -DCMAKE_BUILD_TYPE=Release -DBUILD_EXAMPLE=OFF && cmake --build . --config Release && cmake --build . --config Release --target install/strip
RUN cd /tempDir && git clone https://github.com/GeneralAndKing/core-SF2CS-interface.git && cd core-SF2CS-interface && mkdir lib && mkdir lib/linux && mkdir lib/linux/x64 && cp /tempDir/SeetaFace2/build/bin/* lib/linux/x64 && ls lib/linux/x64  && cmake . && make
RUN mkdir /seetaFace2
RUN cp /tempDir/SeetaFace2/build/bin/* /seetaFace2/
RUN cp /tempDir/core-SF2CS-interface/libSF2CS-Interface.so /seetaFace2/
RUN ls /seetaFace2
ADD seetaFace2/model5 /seetaFace2/model5
ADD seetaFace2/model81 /seetaFace2/model81
ADD face /face
ADD avatar /avatar
ADD face-recognize-server-1.0-SNAPSHOT.jar /app.jar
ENTRYPOINT ["java","-jar","/app.jar"]