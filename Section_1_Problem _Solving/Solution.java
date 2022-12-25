import java.util.*;


class Solution {


    public static void main(String... args) {
        double grandTotal = 1079;
        double taxRate = 0.18;
        double couponDiscountPercentage = 0.1;

        double taxAmount = grandTotal * taxRate;
        double subtotal = grandTotal / (1 + taxRate);
        double couponDiscountAmount = subtotal * couponDiscountPercentage;
        double basePrice = subtotal + couponDiscountAmount;

        Map<String, Object> result = new HashMap<>();
        result.put("basePrice", basePrice);
        result.put("couponDiscountPercentage", 10);
        result.put("couponDiscountAmount", couponDiscountAmount);
        result.put("subtotal", subtotal);
        result.put("taxRate", 18);
        result.put("taxAmount", taxAmount);
        result.put("grandTotal", 1079);

        System.out.println(result);
    }
}
