تقرير تحديد الفونت من صور موقع Manav Tech Labs

مهم:
- الصور PNG/Raster ولا تحتوي على بيانات فونت مدمجة يمكن استخراجها بشكل مؤكد.
- التحديد هنا Visual Match من شكل الحروف، لذلك النتيجة تقريبية وليست استخراج Font File.
- لا يتم إرفاق ملفات فونت داخل الـ ZIP بسبب حقوق الترخيص.

النتيجة الأقرب:
1) الفونت الأساسي للموقع: Montserrat
   الاستخدام: العناوين الكبيرة، الناف بار، الأزرار، عناوين الكروت، النصوص الصغيرة.
   الأوزان المقترحة:
   - Headings: Montserrat ExtraBold / Black 800-900
   - Section Label / Nav / Buttons: Montserrat SemiBold / Bold 600-700
   - Body Text: Montserrat Regular / Medium 400-500

2) اللوجو MANAV TECH LABS:
   غالباً ليس فونت جاهز 100%، أقرب شيء Custom/Modified Geometric Sans.
   أقرب بدائل لو عايز تعمله بالكود أو في Figma:
   - Montserrat SemiBold أو Bold مع Letter Spacing واسع
   - Orbitron Medium كبديل Futuristic
   - Eurostile / Microgramma كبديل Tech إن كان متاحاً بترخيص

3) بدائل قريبة لو Montserrat لم يطلع مطابق عند التطبيق:
   - Poppins
   - Inter
   - Outfit
   - Sora

CSS مقترح:
font-family: 'Montserrat', 'Poppins', 'Inter', Arial, sans-serif;

نصيحة تطبيق:
- استخدم Montserrat في الموقع كله أولاً.
- للعناوين الكبيرة: font-weight: 800 أو 900 + uppercase.
- للـ labels والـ nav: letter-spacing بين 1.5px و 3px.
- للوجو: الأفضل استخدام SVG/PNG الأصلي بدل كتابة النص كفونت.
