#include <opencv2/opencv.hpp>
#include <iostream>

using namespace std;
using namespace cv;

class Paint
{
private:
    Mat image;
    Scalar color;

    static void onMouse(int event, int x, int y, int flags, void* userdata)
    {
        Paint* obj = static_cast<Paint*>(userdata);
        if (event == EVENT_LBUTTONDOWN)
        {
            obj->color = Scalar(rand() % 256, rand() % 256, rand() % 256);
            obj->paintPixel(x, y);
        }
    }

    void paintPixel(int x, int y)
    {
        image.at<Vec3b>(y, x)[0] = color[0];
        image.at<Vec3b>(y, x)[1] = color[1];
        image.at<Vec3b>(y, x)[2] = color[2];
        imshow("Paint", image);
    }

public:
    Paint() {}

    void run()
    {
        image = Mat::zeros(500, 500, CV_8UC3);
        namedWindow("Paint", WINDOW_AUTOSIZE);
        setMouseCallback("Paint", onMouse, this);

        while (true)
        {
            imshow("Paint", image);
            char key = waitKey(10);
            if (key == 27) // ESC key
            {
                break;
            }
        }
    }
};

int main()
{
    Paint paint;
    paint.run();
    return 0;
}
