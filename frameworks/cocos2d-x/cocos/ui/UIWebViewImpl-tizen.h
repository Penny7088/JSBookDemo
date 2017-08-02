/****************************************************************************
 Copyright (c) 2014-2017 Chukong Technologies Inc.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

#ifndef __COCOS2D__UI__WEBVIEWIMPL_TIZEN_H_
#define __COCOS2D__UI__WEBVIEWIMPL_TIZEN_H_

#include "platform/CCPlatformConfig.h"

#if (CC_TARGET_PLATFORM == CC_PLATFORM_TIZEN)

#include <iosfwd>
#include "Evas.h"

namespace cocos2d {
    class Data;
    class Renderer;
    class Mat4;

    namespace experimental {
        namespace ui{
            class WebView;
        }
    }
}

namespace cocos2d {
    namespace experimental {
        namespace ui{

            class WebViewImpl {
            public:
                WebViewImpl(cocos2d::experimental::ui::WebView *webView);

                virtual ~WebViewImpl();

                void setJavascriptInterfaceScheme(const std::string &scheme);

                void loadData(const cocos2d::Data &data, const std::string &MIMEType, const std::string &encoding, const std::string &baseURL);

                void loadHTMLString(const std::string &string, const std::string &baseURL);

                void loadURL(const std::string &url);
                void loadURL(const std::string &url, bool cleanCachedData);

                void loadFile(const std::string &fileName);

                void stopLoading();

                void reload();

                bool canGoBack();

                bool canGoForward();

                void goBack();

                void goForward();

                void evaluateJS(const std::string &js);

                void setScalesPageToFit(const bool scalesPageToFit);

                virtual void draw(cocos2d::Renderer *renderer, cocos2d::Mat4 const &transform, int flags);

                virtual void setVisible(bool visible);

                void setBounces(bool bounces);

                Evas_Object* _ewkWin;
                Evas_Object* _ewkView;
            private:
                WebView *_webView;
            };

        } // namespace ui
    } // namespace experimental
} //cocos2d

#endif // #if (CC_TARGET_PLATFORM == CC_PLATFORM_TIZEN)

#endif /* __COCOS2D__UI__WEBVIEWIMPL_TIZEN_H_ */
