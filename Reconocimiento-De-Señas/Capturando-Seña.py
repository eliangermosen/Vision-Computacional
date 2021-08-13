import cv2
import numpy as np
import imutils
import os

Datos = 'Hola'

if not os.path.exists(Datos):
    print('Carpeta creada: ',Datos)
    os.makedirs(Datos)

cap = cv2.VideoCapture(0,cv2.CAP_DSHOW)

x1, y1 = 190, 80
x2, y2 = 450, 398

count = 0

while True:
    ret,frame = cap.read()
    if ret == False: break
    imAux = frame.copy()
    cv2.rectangle(frame,(x1,x2),(x2,y2),(250,0,0),2)

    objecto = imAux[y1:y2,x1:x2]
    objecto = imutils.resize(objecto, width=38)

    k = cv2.waitKey(1)
    if k ==27:
        break
    if k == ord('a'):
        cv2.imwrite(Datos+'/objeto_{}.jpg'.format(count),objecto)
        print ('Imagen almacenada:','objeto_{}.jpg'.format(count))
        count = count + 1
    cv2.imshow('frame', frame)
    cv2.imshow('objeto',objecto)


    k= cv2.waitKey(1)
    if k == 27:
        break

cap.release()
cv2.destroyAllWindows()








    



